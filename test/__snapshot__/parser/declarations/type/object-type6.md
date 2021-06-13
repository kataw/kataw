# Kataw parser test case

## Input

`````js
type a = {"string":y.z};
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
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 201392131,
                            "text": "string",
                            "rawText": "\"string\"",
                            "flags": 96,
                            "start": 10,
                            "end": 18
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 145,
                                "qualification": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 20
                                },
                                "id": {
                                    "kind": 134299649,
                                    "text": "z",
                                    "rawText": "z",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 22
                                },
                                "flags": 32,
                                "start": 19,
                                "end": 22
                            },
                            "typeParameters": null,
                            "flags": 32,
                            "start": 19,
                            "end": 22
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 22
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 8,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "type a = {\"string\":y.z};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

