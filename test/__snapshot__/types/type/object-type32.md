# Kataw parser test case

## Input

`````js
type x = {get x (): string }
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
                "text": "x",
                "rawText": "x",
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
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 148,
                                "functionTypeParameterList": {
                                    "kind": 282,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 17
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "start": 19,
                                        "end": 26
                                    },
                                    "flags": 2097152,
                                    "start": 19,
                                    "end": 26
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 15,
                                "end": 26
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 28
                },
                "flags": 2097152,
                "start": 8,
                "end": 28
            },
            "flags": 2097152,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "type x = {get x (): string }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

