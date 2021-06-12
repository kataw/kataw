# Kataw parser test case

## Input

`````js
type X = {[(x) =>x]: string, (): string};
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
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 14,
                                "end": 17
                            },
                            "parameters": {
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
                                "flags": 0,
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
                                "flags": 0,
                                "start": 17,
                                "end": 18
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 11,
                            "end": 18
                        },
                        "type": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 20,
                            "end": 27
                        },
                        "flags": 0,
                        "start": 10,
                        "end": 28
                    },
                    {
                        "kind": 196,
                        "protoKeyword": null,
                        "typeParameter": null,
                        "value": {
                            "kind": 208,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 30,
                            "end": 30
                        },
                        "staticToken": null,
                        "returnType": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 32,
                            "end": 39
                        },
                        "flags": 0,
                        "start": 28,
                        "end": 39
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 8,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "type X = {[(x) =>x]: string, (): string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

