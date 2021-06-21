# Kataw parser test case

## Input

`````js
let x: () => {} | ({y: z});
`````

## Options

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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 8,
                                    "end": 8
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 9,
                                    "end": 12
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 134234353,
                                                "properties": [],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 12,
                                                "end": 15
                                            },
                                            {
                                                "kind": 290,
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
                                                                "getKeyword": null,
                                                                "setKeyword": null,
                                                                "key": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 20,
                                                                    "end": 21
                                                                },
                                                                "optionalToken": null,
                                                                "value": {
                                                                    "kind": 139,
                                                                    "bitwiseOrToken": null,
                                                                    "bitwiseAndToken": null,
                                                                    "type": {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "z",
                                                                            "rawText": "z",
                                                                            "flags": 96,
                                                                            "start": 22,
                                                                            "end": 24
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 22,
                                                                        "end": 24
                                                                    },
                                                                    "flags": 2097152,
                                                                    "start": 22,
                                                                    "end": 24
                                                                },
                                                                "flags": 2097152,
                                                                "start": 20,
                                                                "end": 24
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "start": 19,
                                                        "end": 25
                                                    },
                                                    "flags": 2097152,
                                                    "start": 19,
                                                    "end": 25
                                                },
                                                "flags": 2097152,
                                                "start": 17,
                                                "end": 26
                                            }
                                        ],
                                        "flags": 2097152,
                                        "start": 15,
                                        "end": 26
                                    },
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 6,
                                "end": 26
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 26
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 26
            },
            "flags": 33554448,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "let x: () => {} | ({y: z});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

let x: ;
```

### Diagnostics

```javascript
✔ No errors
```

