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
                "rawText": "",
                "flags": 768,
                "start": 0,
                "end": 2
            },
            "flags": 128,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "some content",
                "rawText": "some content",
                "flags": 769,
                "start": 4,
                "end": 19
            },
            "flags": 128,
            "start": 4,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "var",
                "rawText": "var",
                "flags": 769,
                "start": 21,
                "end": 27
            },
            "flags": 128,
            "start": 21,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "x / y",
                "rawText": "x / y",
                "flags": 769,
                "start": 29,
                "end": 37
            },
            "flags": 128,
            "start": 29,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "raw lower unicode @{x200}",
                "rawText": "raw lower unicode @{x200}",
                "flags": 769,
                "start": 39,
                "end": 67
            },
            "flags": 128,
            "start": 39,
            "end": 67
        }
    ],
    "isModule": false,
    "text": "\"\"\n;\n\"some content\"\n;\n\"var\"\n;\n\"x / y\"\n;\n\"raw lower unicode @{x200}\"",
    "fileName": "__root__",
    "flags": 0,
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
@{x2714}@ No errors
```

