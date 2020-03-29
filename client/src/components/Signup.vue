<template>
    <div class = 'container'>
        <div class = 'row'>
            <div class = 'col-md-8'>
                <h2>Create an Account</h2>
                <form>
                    <div class="Window_one">
                        <div class = 'form-group'>
                            <label for = 'First Name'> First Name </label>
                            <input type = 'text' name = 'fname' id = 'fname' placeholder = 'Enter First Name' v-model = 'fname' class="form-control"/>
                            <label for = 'Middle Initial'> Middle Initial </label>
                            <input type = 'text' name = 'Mname' id = 'Mname' placeholder = 'Enter First Name' v-model = 'Mname' class="form-control"/>
                            <label for = 'Last Name'> Last Name </label>
                            <input type = 'text' name = 'lname' id = 'lname' placeholder = 'Enter First Name' v-model = 'lname' class="form-control"/>
                        </div>
                    </div>
                    <div class = 'form-group'>
                        <label for = 'Address'> Address </label>
                        <input type = 'text' name = 'Address' id = 'Address' placeholder = 'Enter First Name' v-model = 'fname' class="form-control"/>
                        
                        <label for = 'Birth Date'> Birthday </label>
                        <input type = 'text' name = 'DOB' id = 'DOB' placeholder = 'Enter First Name' v-model = 'DOB' class="form-control"/>

                        <label for = 'Email Address'> Email </label>
                        <input type = 'email' name = 'Email' id = 'Address' placeholder = 'Enter First Name' v-model = 'Email' class="form-control"/>

                        <label for = 'Username'> Username </label>
                        <input type = 'text' name = 'Uname' id = 'Uname' placeholder = 'Enter First Name' v-model = 'Uname' class="form-control"/>                                                
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
</script>