// по умолчанию 0 1 2 3 4 5...
enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart // 1
const membreversed = Membership[2] // 'Premium'

enum Socialmedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK'
}

const social = Socialmedia.VK