# Kataw parser test case

## Input

`````js
type a = ({} | {proto [x]:string}) => T;
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
                "kind": 260,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 134234353,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 2097152,
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
                                        "text": "proto",
                                        "rawText": "proto",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 21
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
                                                    "start": 23,
                                                    "end": 24
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 23,
                                                "end": 24
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "start": 21,
                                        "end": 25
                                    },
                                    "flags": 2097152,
                                    "start": 16,
                                    "end": 25
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 14,
                            "end": 25
                        }
                    ],
                    "flags": 2097152,
                    "start": 12,
                    "end": 25
                },
                "flags": 2097152,
                "start": 8,
                "end": 25
            },
            "flags": 2097152,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 26,
                "end": 32
            },
            "flags": 16,
            "start": 26,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 37,
                "end": 39
            },
            "flags": 16,
            "start": 37,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "type a = ({} | {proto [x]:string}) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 25, end: 26
✖ Declaration or statement expected - start: 32, end: 33
✖ Declaration or statement expected - start: 33, end: 34
✖ Declaration or statement expected - start: 34, end: 37

```

