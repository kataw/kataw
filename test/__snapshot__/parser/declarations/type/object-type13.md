# Kataw parser test case

## Input

`````js
type a = {[{x:y}]:string};
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
                        "kind": 195,
                        "protoKeyword": null,
                        "staticToken": null,
                        "name": null,
                        "key": {
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
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 13
                                    },
                                    "optionalToken": null,
                                    "value": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 14,
                                            "end": 15
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "flags": 0,
                                    "start": 12,
                                    "end": 15
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "start": 11,
                            "end": 16
                        },
                        "type": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 18,
                            "end": 24
                        },
                        "flags": 0,
                        "start": 10,
                        "end": 24
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "start": 8,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "type a = {[{x:y}]:string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

