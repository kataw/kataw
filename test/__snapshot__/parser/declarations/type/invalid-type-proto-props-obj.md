# Kataw parser test case

## Input

`````js
type T = { proto p: string }
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
                "text": "T",
                "rawText": "T",
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
                            "kind": 134299649,
                            "text": "proto",
                            "rawText": "proto",
                            "flags": 96,
                            "start": 10,
                            "end": 16
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "p",
                                "rawText": "p",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 0,
                        "start": 10,
                        "end": 18
                    },
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": null,
                        "setKeyword": null,
                        "key": {
                            "kind": 16637,
                            "text": "",
                            "flags": 64,
                            "start": 18,
                            "end": 18
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 19,
                            "end": 26
                        },
                        "flags": 0,
                        "start": 18,
                        "end": 26
                    }
                ],
                "flags": 0,
                "start": 8,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "type T = { proto p: string }",
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
✖ Expected a `;` - start: 18, end: 19

```

