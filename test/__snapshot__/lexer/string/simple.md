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

### Hybrid CST

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
                "original": "\"\"",
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
                "original": "\"some content\"",
                "rawText": "\n\"some content\"",
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
                "original": "\"var\"",
                "rawText": "\n\"var\"",
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
                "original": "\"x / y\"",
                "rawText": "\n\"x / y\"",
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
                "original": "\"raw lower unicode @{x200}\"",
                "rawText": "\n\"raw lower unicode @{x200}\"",
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

