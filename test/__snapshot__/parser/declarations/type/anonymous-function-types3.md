# Kataw parser test case

## Input

`````js
type A = (string,) => void
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
                "text": "A",
                "rawText": "A",
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
                    "kind": 288,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 18,
                        "end": 21
                    },
                    "arrowToken": {
                        "kind": 292,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 10,
                                    "end": 16
                                },
                                "optionalToken": null,
                                "types": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 16
                            }
                        ],
                        "trailingComma": true,
                        "flags": 2097152,
                        "start": 8,
                        "end": 17
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 138477615,
                            "flags": 2097216,
                            "start": 21,
                            "end": 26
                        },
                        "flags": 2097152,
                        "start": 21,
                        "end": 26
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 26
                },
                "flags": 2097152,
                "start": 8,
                "end": 26
            },
            "flags": 2097152,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "type A = (string,) => void",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

 type A =  : void  
```

### Diagnostics

```javascript
✔ No errors
```

