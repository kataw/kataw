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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 5,
                "end": 5
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 5
        },
        {
            "kind": 158,
            "throwKeyword": {
                "kind": 37757026,
                "flags": 81,
                "transformFlags": 0,
                "start": 5,
                "end": 20
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 20,
                "end": 20
            },
            "flags": 81,
            "transformFlags": 0,
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
                "transformFlags": 0,
                "start": 26,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
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
                "transformFlags": 0,
                "start": 27,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 27,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "throw //\\n x;\n\nthrow /**/\\n x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Linebreak ermitted after throw - start: 5, end: 20
✖ Identifier expected - start: 5, end: 20
✖ Invalid hexadecimal escape sequence - start: 20, end: 25
✖ Identifier expected - start: 20, end: 26
✖ Expected a `;` - start: 27, end: 29

```

