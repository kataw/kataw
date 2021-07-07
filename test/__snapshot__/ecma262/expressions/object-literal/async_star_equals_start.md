# Kataw parser test case

## Input

`````js
({async *=f(){}})
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
                    "end": 13
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 14,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "({async *=f(){}})",
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
✖ Property definition expected. Did you mean to use a ':'? - start: 7, end: 10
✖ ',' expected - start: 8, end: 10
✖ Expression exprected. A compound assignment or an logical assignment cannot follow an object literal - start: 1, end: 10
✖ Expected a ')' to match the '(' token here - start: 13, end: 14
✖ Declaration or statement expected - start: 15, end: 16
✖ Declaration or statement expected - start: 16, end: 17

```

