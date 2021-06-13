# Kataw parser test case

## Input

`````js
type X = {[|(x) =>x&symbol]: string,};
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
                "text": "X",
                "rawText": "X",
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
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 195,
                        "protoKeyword": null,
                        "staticToken": null,
                        "name": null,
                        "key": {
                            "kind": 261,
                            "arrowTypeParameterList": {
                                "kind": 10,
                                "flags": 64,
                                "start": 15,
                                "end": 18
                            },
                            "arrowToken": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 14
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 12,
                                "end": 14
                            },
                            "returnType": {
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 18,
                                        "end": 19
                                    },
                                    {
                                        "kind": 134234343,
                                        "flags": 2097216,
                                        "start": 20,
                                        "end": 26
                                    }
                                ],
                                "flags": 2097152,
                                "start": 19,
                                "end": 26
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 12,
                            "end": 26
                        },
                        "type": {
                            "kind": 134234347,
                            "flags": 2097216,
                            "start": 28,
                            "end": 35
                        },
                        "flags": 2097152,
                        "start": 10,
                        "end": 36
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "start": 8,
                "end": 37
            },
            "flags": 2097152,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "type X = {[|(x) =>x&symbol]: string,};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

