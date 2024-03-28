import axios from "axios";
import crypto from "crypto";

const logoutBEServer = async (accessToken) => {
    const res = await fetch('https://api.techschool.id.vn/api/auth/logout', {
        credentials: 'include',
        mode: 'cors',
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json());
    return res;
}
const logoutNextServer = async() => {
    const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
        }
    }).then(res => res.json());
    return res;
}

const setAccessToken = async() => {
    const res = await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify(res),
        headers: {
            "Content-Type" : "application/json"
        }
    }).then(res => res.json());
    return res;
}
const generateSHA1 =(data) => {
    const hash = crypto.createHash("sha1");
    hash.update(data);
    return hash.digest("hex");
}

const generateSignature = (publicId, apiSecret) => {
	const timestamp = new Date().getTime();
	return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
};

const handleDeleteAvatar = async (publicId) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const timestamp = new Date().getTime();
    const apiKey = process.env.API_KEY;
    const apiSecret = process.env.API_SECRET;
    const signature = generateSHA1(generateSignature(publicId, apiSecret));
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;
  
    try {
      const response = await axios.post(url, {
        public_id: publicId,
        signature: signature,
        api_key: apiKey,
        timestamp: timestamp,
      });
      return response;
    } catch (error) {
      return {
        status: 500,
        message: 'Error From server'
      }
    }
  };

export {
    logoutBEServer,
    logoutNextServer,
    setAccessToken,
    handleDeleteAvatar
}
