# Kataw parser test case

## Input

`````js
type a = ({} | {static [x]:string}) => T;
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
                "kind": 260,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 134234353,
                            "properties": [],
                            "flags": 0,
                            "start": 10,
                            "end": 12
                        },
                        {
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
                                        "text": "static",
                                        "rawText": "static",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 22
                                    },
                                    "optionalToken": null,
                                    "value": {
                                        "kind": 147,
                                        "elementTypes": [
                                            {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 24,
                                                    "end": 25
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 24,
                                                "end": 25
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 22,
                                        "end": 26
                                    },
                                    "flags": 0,
                                    "start": 16,
                                    "end": 26
                                }
                            ],
                            "flags": 0,
                            "start": 14,
                            "end": 26
                        }
                    ],
                    "flags": 0,
                    "start": 12,
                    "end": 26
                },
                "flags": 0,
                "start": 8,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 27,
                "end": 33
            },
            "flags": 16,
            "start": 27,
            "end": 33
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 38,
                "end": 40
            },
            "flags": 16,
            "start": 38,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "type a = ({} | {static [x]:string}) => T;",
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
✖ Expected a `;` - start: 26, end: 27
✖ Declaration or statement expected - start: 33, end: 34
✖ Declaration or statement expected - start: 34, end: 35
✖ Declaration or statement expected - start: 35, end: 38

```

