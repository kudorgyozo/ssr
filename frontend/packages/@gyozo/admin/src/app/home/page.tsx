import { SomeComponent } from '@gyozo/lib/components/SomeComponent';
import { Table } from '@gyozo/lib/components/Table';

export const Home = () => {
    return (
        <div>
            Home
            <SomeComponent />
            <Table dataSourceId='5' />
        </div>
    );
};

export default Home;
