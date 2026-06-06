const teamMembers = [
  {
    name: 'Đồng Thành Minh Trí',
    role: 'SE184190',
    color: 'burgundy',
    avatar: 'MT',
  },
  {
    name: 'Đặng Đinh Thiên Lân',
    role: 'SE171568',
    color: 'ochre',
    avatar: 'TL',
  },
  {
    name: 'Nguyễn Mai Anh',
    role: 'SA180169',
    color: 'terracotta',
    avatar: 'MA',
  },
  {
    name: 'Nguyễn Hoàng Phi Long',
    role: 'SE170237',
    color: 'teal',
    avatar: 'PL',
  },
]

const colorClasses: Record<string, string> = {
  burgundy: "bg-burgundy text-white",
  ochre: "bg-ochre text-ink",
  terracotta: "bg-terracotta text-white",
  teal: "bg-teal text-white"
};

export function TeamSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <h3 className="font-display text-3xl text-burgundy mb-12 text-center">
        Nhóm thực hiện
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-display font-semibold mb-4 transition-transform group-hover:scale-110 ${
                colorClasses[member.color]
              }`}
            >
              {member.avatar}
            </div>
            <h4 className="font-medium text-lg text-ink mb-1">
              {member.name}
            </h4>
            <p className="text-sm text-soft-text">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
