# Kataw parser test case

## Input

`````js
// one comment
/* two
 comment */ "use strict"; with (x) y;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "\"use strict\"",
            "flags": 97,
            "start": 0,
            "end": 46
        }
    ],
    "statements": [
        {
            "kind": 153,
            "withKeyword": {
                "kind": 37757029,
                "flags": 0,
                "start": 47,
                "end": 52
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 54,
                "end": 55
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 56,
                    "end": 58
                },
                "flags": 16,
                "start": 56,
                "end": 59
            },
            "flags": 16,
            "start": 47,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "// one comment\n/* two\n comment */ \"use strict\"; with (x) y;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'with' statements are not allowed in strict mode. - start: 47, end: 52

```

