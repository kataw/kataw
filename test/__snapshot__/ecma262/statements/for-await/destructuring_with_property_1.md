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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
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
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 7
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 9
                                },
                                "flags": 96,
                                "transformFlags": 2,
                                "start": 6,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 9
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 5,
                    "end": 10
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 14
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 0,
                "end": 14
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 14,
                "end": 17
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "transformFlags": 0,
                "start": 17,
                "end": 19
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 22
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 20,
                "end": 22
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "for ([a.b].foo of c) d",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

for ([a.b].foo of c) d;
```

### Diagnostics

```javascript
✔ No errors
```

