# Kataw parser test case

## Input

`````js
throw //\n x;

throw /**/\n x;
`````

## Output
### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 158,
            "throwKeyword": {
                "kind": 37757026,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 5,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 158,
            "throwKeyword": {
                "kind": 37757026,
                "flags": 1,
                "start": 5,
                "end": 20
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 20,
                "end": 20
            },
            "flags": 16,
            "start": 5,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 26,
                "end": 27
            },
            "flags": 16,
            "start": 26,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 27,
                "end": 29
            },
            "flags": 16,
            "start": 27,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "throw //\\n x;\n\nthrow /**/\\n x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Linebreak ermitted after throw - start: 5, end: 20
✖ Expression expected - start: 5, end: 20
✖ Invalid hexadecimal escape sequence - start: 20, end: 25
✖ Expression expected - start: 20, end: 26
✖ Expected a `;` - start: 27, end: 29

```

