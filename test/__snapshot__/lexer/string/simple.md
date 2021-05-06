# Kataw parser test case

## Input

`````js
""
;
"some content"
;
"var"
;
"x / y"
;
"raw lower unicode @{x200}"
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
                "kind": 201392131,
                "text": "",
                "rawText": "\"\"",
                "flags": 96,
                "start": 0,
                "end": 2
            },
            "flags": 16,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "some content",
                "rawText": "\"some content\"",
                "flags": 97,
                "start": 4,
                "end": 19
            },
            "flags": 16,
            "start": 4,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "var",
                "rawText": "\"var\"",
                "flags": 97,
                "start": 21,
                "end": 27
            },
            "flags": 16,
            "start": 21,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "x / y",
                "rawText": "\"x / y\"",
                "flags": 97,
                "start": 29,
                "end": 37
            },
            "flags": 16,
            "start": 29,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "raw lower unicode @{x200}",
                "rawText": "\"raw lower unicode @{x200}\"",
                "flags": 97,
                "start": 39,
                "end": 67
            },
            "flags": 16,
            "start": 39,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "\"\"\n;\n\"some content\"\n;\n\"var\"\n;\n\"x / y\"\n;\n\"raw lower unicode @{x200}\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 67
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

