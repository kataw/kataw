# Kataw parser test case

## Input

`````js
for ([a.b].foo of c) d
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
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 6,
                                    "end": 7
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 9
                                },
                                "flags": 256,
                                "start": 6,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 6,
                        "end": 9
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 10
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 768,
                    "start": 11,
                    "end": 14
                },
                "flags": 256,
                "start": 0,
                "end": 14
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 768,
                "start": 17,
                "end": 19
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 768,
                    "start": 20,
                    "end": 22
                },
                "flags": 128,
                "start": 20,
                "end": 22
            },
            "awaitKeyword": null,
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "for ([a.b].foo of c) d",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

