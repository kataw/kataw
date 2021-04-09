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
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "some content",
                "autofix": 0,
                "flags": 768,
                "start": 4,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 4,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "var",
                "autofix": 0,
                "flags": 768,
                "start": 21,
                "end": 27
            },
            "autofix": 0,
            "flags": 128,
            "start": 21,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "x / y",
                "autofix": 0,
                "flags": 768,
                "start": 29,
                "end": 37
            },
            "autofix": 0,
            "flags": 128,
            "start": 29,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "raw lower unicode @{x200}",
                "autofix": 0,
                "flags": 768,
                "start": 39,
                "end": 67
            },
            "autofix": 0,
            "flags": 128,
            "start": 39,
            "end": 67
        }
    ],
    "isModule": false,
    "text": "\"\"\n;\n\"some content\"\n;\n\"var\"\n;\n\"x / y\"\n;\n\"raw lower unicode @{x200}\"",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 67
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

