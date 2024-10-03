<script>
    export let data;
    let tableArr = data.users
    let totalWeight = 13
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
    <div class="table-container">
        <table class="table table-hover">
            <thead>
            <tr>
                <th>Active</th>
                <th>Email</th>
                <th>Role</th>
                <th>Id</th>
            </tr>
            </thead>
            <tbody>
            {#each tableArr as row, i}
                <tr>
                    <td>{row.isActive}</td>
                    <td>{row.email}</td>
                    <td>{row.role}</td>
                    <td>{row.id}</td>
                </tr>
            {/each}
            </tbody>
            <tfoot>
            <tr>
                <th colspan="3">Calculated Total Weight</th>
                <td>{totalWeight}</td>
            </tr>
            </tfoot>
        </table>
    </div>
</div>