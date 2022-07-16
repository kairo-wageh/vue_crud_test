<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepartmentRequest;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DepartmentController extends Controller
{

    public function index()
    {
        return DepartmentResource::collection(Department::all());
    }

    public function store(DepartmentRequest $department)
    {
        $department = Department::create($department->validated());
        return new DepartmentResource($department);
    }

    public function show(Department $department)
    {
        return new DepartmentResource($department);
    }

    public function update (Department $department, DepartmentRequest $request){
        $department->update($request->validated());
        return new DepartmentResource($department);
    }

    public function destroy(Department $department){
        $department->delete();
        return response()->noContent();
    }
}
