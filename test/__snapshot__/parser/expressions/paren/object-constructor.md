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
                    "flags": 32,
                    "start": 0,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "flags": 16,
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
                "start": 24,
                "end": 31
            },
            "flags": 16,
            "start": 24,
            "end": 31
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "flags": 16,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "start": 32,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "({\n    constructor(this: number){}\n})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

();
number;
{
}
```

### Diagnostics

```javascript
✖ ',' expected - start: 23, end: 24
✖ Expected a ')' to match the '(' token here - start: 23, end: 24
✖ Unexpected token. - start: 23, end: 24
✖ ',' expected - start: 23, end: 24
✖ Expected a `;` - start: 31, end: 32
✖ Declaration or statement expected - start: 34, end: 36
✖ Declaration or statement expected - start: 36, end: 37

```

