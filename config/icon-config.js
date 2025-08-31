import { Linking } from "react-native";

export const socialPlatforms = [
    {
        id: 'whatsapp',
        title: 'WhatsApp',
        name: 'whatsapp',
        library: 'FontAwesome',
        action: () => Linking.openURL('whatspp://')
    },
    {
        id: 'twitter',
        title: 'Twitter',
        name: 'twitter',
        library: 'AntDesign',
        action: () => Linking.openURL('https://x.com/home')
    },
        {
        id: 'instagram',
        title: 'Instagram',
        name: 'instagram',
        library: 'AntDesign',
        action: () => Linking.openURL('https://x.com/home')
    },
    {
        id: 'snapchat',
        title: 'Snapchat',
        name: 'snapchat',
        library: 'FontAwesome',
        action: () => Linking.openURL('https://x.com/home')
    },
    {
        id: 'tiktok',
        title: 'TikTok',
        name: 'tiktok',
        library: 'MaterialIcons',
        action: () => Linking.openURL('https://x.com/home')
    },
]