<html>
<head>
    <?php include_once "lib.php"; ?>
    <title>云数鹰眼车险反欺诈系统</title>
    <script type="text/javascript" src="js/index.js"></script>
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-12 form-inline">
            <input id="op_time" class="form-control input-sm"/>
            <a href="javascript:redirect_with_parameter([['op_time',$('#op_time').val()]])" class="btn btn-sm btn-primary">Search by OP_TIME</a>
            <input id="acc_nbr" class="form-control input-sm"/>
            <a href="javascript:blacklist_add()" class="btn btn-sm btn-primary">Create</a>
        </div>
    </div>
    <hr/>
    <div class="row">
        <div id="blacklist-table" class="col-md-12">
            <table class="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>OP</th>
                </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>
</body>
</html>