type Props = {
    params: {
        page: string;
    };
};

export const generateStaticParams = () => {
    return [
        {
            page: '1',
        },
        {
            page: '2',
        },
    ];
};

export default async ({ params }: Props) => {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;
    var response = await fetch(`${backendUrl}/pages/${params.page}` as string);
    var page = await response.json();

    return (
        <div>
            Page {page.id} {page.content}
        </div>
    );
};
