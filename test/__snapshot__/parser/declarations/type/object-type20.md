# Kataw parser test case

## Input

`````js
type a = {get "string"():string};
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
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
                            "staticToken": null,
                            "getKeyword": {
                                "kind": 16498,
                                "flags": 96,
                                "start": 10,
                                "end": 13
                            },
                            "setKeyword": null,
                            "key": {
                                "kind": 201392131,
                                "text": "string",
                                "rawText": "\"string\"",
                                "flags": 96,
                                "start": 13,
                                "end": 22
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 23,
                                    "end": 23
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "start": 25,
                                        "end": 31
                                    },
                                    "flags": 2097152,
                                    "start": 25,
                                    "end": 31
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 22,
                                "end": 31
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 31
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 32
                },
                "flags": 2097152,
                "start": 8,
                "end": 32
            },
            "flags": 2097152,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "type a = {get \"string\"():string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

  
```

### Diagnostics

```javascript
✔ No errors
```

