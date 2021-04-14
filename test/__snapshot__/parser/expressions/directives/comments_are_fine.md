# Kataw parser test case

## Input

`````js
// one comment
/* two
 comment */ "use strict"; with (x) y;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 67174403,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 769,
            "start": 0,
            "end": 46
        }
    ],
    "statements": [
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 768,
                "start": 47,
                "end": 52
            },
            "expression": {
                "kind": 81921,
                "text": "x",
                "rawText": "x",
                "flags": 768,
                "start": 54,
                "end": 55
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "text": "y",
                    "rawText": "y",
                    "flags": 768,
                    "start": 56,
                    "end": 58
                },
                "flags": 128,
                "start": 56,
                "end": 59
            },
            "flags": 128,
            "start": 47,
            "end": 59
        }
    ],
    "isModule": false,
    "text": "// one comment\n/* two\n comment */ \"use strict\"; with (x) y;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 75,
            "error": "'with' statements are not allowed in strict mode.",
            "start": 47,
            "end": 52
        }
    ],
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

