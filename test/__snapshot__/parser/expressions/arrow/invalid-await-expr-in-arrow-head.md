# Kataw parser test case

## Input

`````js
({x} = await bar) => {};

([x] = await bar) => {};

`````

## Output

### Hybrid CST

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
                    "flags": 32,
                    "start": 0,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 12,
                "end": 16
            },
            "flags": 16,
            "start": 12,
            "end": 16
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 22,
                "end": 22
            },
            "flags": 16,
            "start": 20,
            "end": 23
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 23,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "flags": 32,
                    "start": 24,
                    "end": 38
                },
                "flags": 32,
                "start": 24,
                "end": 38
            },
            "flags": 16,
            "start": 24,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "start": 38,
                "end": 42
            },
            "flags": 16,
            "start": 38,
            "end": 42
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 48,
                "end": 48
            },
            "flags": 16,
            "start": 46,
            "end": 49
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 49,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "({x} = await bar) => {};\n\n([x] = await bar) => {};\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 12, end: 16
✖ Expected a `;` - start: 16, end: 17
✖ Declaration or statement expected - start: 17, end: 20
✖ Expected a ')' to match the '(' token here - start: 38, end: 42
✖ Expected a `;` - start: 42, end: 43
✖ Declaration or statement expected - start: 43, end: 46

```

