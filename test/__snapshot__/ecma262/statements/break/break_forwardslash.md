# Kataw parser test case

## Input

`````js
for(x of 3)break/
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
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 4,
                "end": 5
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 8
            },
            "expression": {
                "kind": 201392130,
                "text": 3,
                "rawText": "3",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "statement": {
                "kind": 150,
                "breakKeyword": {
                    "kind": 37757005,
                    "flags": 80,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 16
                },
                "label": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 16
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 11,
                "end": 16
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 18
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 16,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for(x of 3)break/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 16, end: 18
✖ Identifier expected - start: 16, end: 18
✖ A 'break' statement can only jump to a label of an enclosing statement - start: 16, end: 18

```

