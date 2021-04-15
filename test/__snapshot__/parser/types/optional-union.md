# Kataw parser test case

## Input

`````js
type Obj1 = {
  field: {key: ?string | Array<string>},
};
`````

## Options

### Parser Options

`````js
{}
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
            "declareToken": null,
            "opaqueToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 768,
                "start": 0,
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "Obj1",
                "rawText": "Obj1",
                "flags": 768,
                "start": 4,
                "end": 9
            },
            "opaqueType": null,
            "typeParameters": null,
            "type": {
                "kind": 134217969,
                "properties": [
                    {
                        "kind": 193,
                        "key": {
                            "kind": 134299649,
                            "text": "field",
                            "rawText": "field",
                            "flags": 768,
                            "start": 13,
                            "end": 21
                        },
                        "value": {
                            "kind": 134217969,
                            "properties": [
                                {
                                    "kind": 193,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "key",
                                        "rawText": "key",
                                        "flags": 768,
                                        "start": 24,
                                        "end": 27
                                    },
                                    "value": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 134217970,
                                                "type": {
                                                    "kind": 134234347,
                                                    "flags": 768,
                                                    "start": 30,
                                                    "end": 36
                                                },
                                                "flags": 0,
                                                "start": 28,
                                                "end": 36
                                            },
                                            {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "Array",
                                                    "rawText": "Array",
                                                    "flags": 768,
                                                    "start": 38,
                                                    "end": 44
                                                },
                                                "typeParameters": {
                                                    "kind": 146,
                                                    "types": [
                                                        {
                                                            "kind": 134234347,
                                                            "flags": 768,
                                                            "start": 45,
                                                            "end": 51
                                                        }
                                                    ],
                                                    "flags": 0,
                                                    "start": 44,
                                                    "end": 52
                                                },
                                                "flags": 0,
                                                "start": 38,
                                                "end": 52
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 36,
                                        "end": 52
                                    },
                                    "optionalToken": null,
                                    "staticToken": false,
                                    "flags": 0,
                                    "start": 24,
                                    "end": 52
                                }
                            ],
                            "indexers": [],
                            "callProperties": [],
                            "internalSlots": [],
                            "flags": 0,
                            "start": 22,
                            "end": 53
                        },
                        "optionalToken": null,
                        "staticToken": false,
                        "flags": 0,
                        "start": 13,
                        "end": 53
                    }
                ],
                "indexers": [],
                "callProperties": [],
                "internalSlots": [],
                "flags": 0,
                "start": 11,
                "end": 56
            },
            "flags": 128,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "text": "type Obj1 = {\n  field: {key: ?string | Array<string>},\n};",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 57
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

