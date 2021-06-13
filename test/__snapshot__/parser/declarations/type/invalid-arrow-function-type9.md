# Kataw parser test case

## Input

`````js
type a = ({} | { [x]?:string}) => T;
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
                "kind": 290,
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
                                    "kind": 195,
                                    "protoKeyword": null,
                                    "staticToken": null,
                                    "name": null,
                                    "key": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "type": {
                                        "kind": 134217970,
                                        "nullableToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "start": 20,
                                            "end": 21
                                        },
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 16637,
                                                "text": "",
                                                "flags": 64,
                                                "start": 21,
                                                "end": 21
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 21,
                                            "end": 21
                                        },
                                        "flags": 2097152,
                                        "start": 20,
                                        "end": 21
                                    },
                                    "flags": 2097152,
                                    "start": 16,
                                    "end": 21
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 14,
                            "end": 21
                        }
                    ],
                    "flags": 2097152,
                    "start": 12,
                    "end": 21
                },
                "flags": 2097152,
                "start": 8,
                "end": 21
            },
            "flags": 2097152,
            "start": 0,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 22,
                "end": 28
            },
            "flags": 16,
            "start": 22,
            "end": 28
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 33,
                "end": 35
            },
            "flags": 16,
            "start": 33,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "type a = ({} | { [x]?:string}) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Type expected - start: 21, end: 22
✖ Declaration or statement expected - start: 28, end: 29
✖ Declaration or statement expected - start: 29, end: 30
✖ Declaration or statement expected - start: 30, end: 33

```

