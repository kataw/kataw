# Kataw parser test case

## Input

`````js
type a = {1:y.z[][][]};
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
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 10,
                            "end": 11
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 136,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 145,
                                            "qualification": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "id": {
                                                "kind": 134299649,
                                                "text": "z",
                                                "rawText": "z",
                                                "flags": 96,
                                                "start": 14,
                                                "end": 15
                                            },
                                            "flags": 0,
                                            "start": 12,
                                            "end": 15
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 12,
                                        "end": 15
                                    },
                                    "flags": 0,
                                    "start": 16,
                                    "end": 17
                                },
                                "flags": 0,
                                "start": 18,
                                "end": 19
                            },
                            "flags": 0,
                            "start": 20,
                            "end": 21
                        },
                        "flags": 0,
                        "start": 10,
                        "end": 21
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 8,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "type a = {1:y.z[][][]};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

