# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: false, next: true, module: true }
`````

## Input

`````js
"\'"
;
"\""
;
"\\"
;
"\b"
;
"\f"
;
"\n"
;
"\r"
;
"\t"
;
"\v"
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
                "value": "'",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 4
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\"",
                "autofix": 0,
                "flags": 768,
                "start": 6,
                "end": 11
            },
            "autofix": 0,
            "flags": 128,
            "start": 6,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\\",
                "autofix": 0,
                "flags": 768,
                "start": 13,
                "end": 18
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\b",
                "autofix": 0,
                "flags": 768,
                "start": 20,
                "end": 25
            },
            "autofix": 0,
            "flags": 128,
            "start": 20,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\f",
                "autofix": 0,
                "flags": 768,
                "start": 27,
                "end": 32
            },
            "autofix": 0,
            "flags": 128,
            "start": 27,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\n",
                "autofix": 0,
                "flags": 768,
                "start": 34,
                "end": 39
            },
            "autofix": 0,
            "flags": 128,
            "start": 34,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\r",
                "autofix": 0,
                "flags": 768,
                "start": 41,
                "end": 46
            },
            "autofix": 0,
            "flags": 128,
            "start": 41,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\t",
                "autofix": 0,
                "flags": 768,
                "start": 48,
                "end": 53
            },
            "autofix": 0,
            "flags": 128,
            "start": 48,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\u000b",
                "autofix": 0,
                "flags": 768,
                "start": 55,
                "end": 60
            },
            "autofix": 0,
            "flags": 128,
            "start": 55,
            "end": 60
        }
    ],
    "isModule": true,
    "text": "\"\\'\"\n;\n\"\\\"\"\n;\n\"\\\\\"\n;\n\"\\b\"\n;\n\"\\f\"\n;\n\"\\n\"\n;\n\"\\r\"\n;\n\"\\t\"\n;\n\"\\v\"",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 60
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

