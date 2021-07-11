# Kataw parser test case

## Input

`````js
var obj: {
  get foo(): string;
};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234353,
                                "properties": [
                                    {
                                        "kind": 193,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "getKeyword": {
                                            "kind": 16498,
                                            "flags": 97,
                                            "start": 10,
                                            "end": 16
                                        },
                                        "setKeyword": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 20
                                        },
                                        "optionalToken": null,
                                        "type": {
                                            "kind": 148,
                                            "functionTypeParameterList": {
                                                "kind": 282,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 21,
                                                "end": 21
                                            },
                                            "returnType": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 2097216,
                                                    "start": 23,
                                                    "end": 30
                                                },
                                                "flags": 2097152,
                                                "start": 23,
                                                "end": 30
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 20,
                                            "end": 30
                                        },
                                        "flags": 2097152,
                                        "start": 10,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 8,
                                "end": 33
                            },
                            "flags": 2097152,
                            "start": 8,
                            "end": 33
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "var obj: {\n  get foo(): string;\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

var  obj: { foo(): string } ;

```

### Diagnostics

```javascript
✔ No errors
```

