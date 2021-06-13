# Kataw parser test case

## Input

`````js
type X = {[(x) =>x]: string,};
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
                            "kind": 288,
                            "arrowTypeParameterList": {
                                "kind": 10,
                                "flags": 64,
                                "start": 14,
                                "end": 17
                            },
                            "arrowToken": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 13
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 11,
                                "end": 13
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 18
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 17,
                                "end": 18
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 11,
                            "end": 18
                        },
                        "type": {
                            "kind": 134234347,
                            "flags": 2097216,
                            "start": 20,
                            "end": 27
                        },
                        "flags": 2097152,
                        "start": 10,
                        "end": 28
                    }
                ],
                "trailingComma": false,
                "flags": 2097152,
                "start": 8,
                "end": 29
            },
            "flags": 2097152,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "type X = {[(x) =>x]: string,};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

