# Kataw parser test case

## Input

`````js
type T = { [[foo]]: X }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "typeToken": {
                "kind": 16583,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 768,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 134217969,
                "properties": [],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [
                    {
                        "kind": 248,
                        "name": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 13,
                            "end": 16
                        },
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "X",
                                "rawText": "X",
                                "flags": 768,
                                "start": 19,
                                "end": 21
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "optionalToken": null,
                        "staticToken": false,
                        "flags": 0,
                        "start": 10,
                        "end": 21
                    }
                ],
                "flags": 0,
                "start": 8,
                "end": 23
            },
            "flags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "type T = { [[foo]]: X }",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

