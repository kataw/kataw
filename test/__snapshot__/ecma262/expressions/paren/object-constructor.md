# Kataw parser test case

## Input

`````js
({
    constructor(this: number){}
})
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 23
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "number",
                "rawText": "number",
                "flags": 96,
                "transformFlags": 0,
                "start": 24,
                "end": 31
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 24,
            "end": 31
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 32,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "({\n    constructor(this: number){}\n})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The 'this' keyword cannot be a formal parameter - start: 19, end: 23
✖ ',' expected - start: 23, end: 24
✖ Expected a ')' to match the '(' token here - start: 23, end: 24
✖ '; ' expected - start: 31, end: 32
✖ Declaration or statement expected - start: 34, end: 36
✖ Declaration or statement expected - start: 36, end: 37

```

