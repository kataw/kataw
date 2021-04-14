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
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "'",
                "rawText": "'",
                "flags": 768,
                "start": 0,
                "end": 4
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "\"",
                "rawText": "\"",
                "flags": 769,
                "start": 6,
                "end": 11
            },
            "flags": 128,
            "start": 6,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "\\",
                "rawText": "\\",
                "flags": 769,
                "start": 13,
                "end": 18
            },
            "flags": 128,
            "start": 13,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "\b",
                "rawText": "\b",
                "flags": 769,
                "start": 20,
                "end": 25
            },
            "flags": 128,
            "start": 20,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "\f",
                "rawText": "\f",
                "flags": 769,
                "start": 27,
                "end": 32
            },
            "flags": 128,
            "start": 27,
            "end": 34
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "\n",
                "rawText": "\n",
                "flags": 769,
                "start": 34,
                "end": 39
            },
            "flags": 128,
            "start": 34,
            "end": 41
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "\r",
                "rawText": "\r",
                "flags": 769,
                "start": 41,
                "end": 46
            },
            "flags": 128,
            "start": 41,
            "end": 48
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "\t",
                "rawText": "\t",
                "flags": 769,
                "start": 48,
                "end": 53
            },
            "flags": 128,
            "start": 48,
            "end": 55
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "text": "\u000b",
                "rawText": "\u000b",
                "flags": 769,
                "start": 55,
                "end": 60
            },
            "flags": 128,
            "start": 55,
            "end": 60
        }
    ],
    "isModule": true,
    "text": "\"\\'\"\n;\n\"\\\"\"\n;\n\"\\\\\"\n;\n\"\\b\"\n;\n\"\\f\"\n;\n\"\\n\"\n;\n\"\\r\"\n;\n\"\\t\"\n;\n\"\\v\"",
    "fileName": "__root__",
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

