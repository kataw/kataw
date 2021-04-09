# Kataw parser test case

## Input

`````js
"\x00"
;
"\x12"
;
"\x34"
;
"\x56"
;
"\x78"
;
"\x9a"
;
"\xAb"
;
"\xBc"
;
"\xCd"
;
"\xDe"
;
"\xEf"
;
"\xF0"
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
                "value": "\u0000",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "\u0012",
                "autofix": 0,
                "flags": 768,
                "start": 8,
                "end": 15
            },
            "autofix": 0,
            "flags": 128,
            "start": 8,
            "end": 17
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "4",
                "autofix": 0,
                "flags": 768,
                "start": 17,
                "end": 24
            },
            "autofix": 0,
            "flags": 128,
            "start": 17,
            "end": 26
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "V",
                "autofix": 0,
                "flags": 768,
                "start": 26,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 26,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "x",
                "autofix": 0,
                "flags": 768,
                "start": 35,
                "end": 42
            },
            "autofix": 0,
            "flags": 128,
            "start": 35,
            "end": 44
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{x9a}@",
                "autofix": 0,
                "flags": 768,
                "start": 44,
                "end": 51
            },
            "autofix": 0,
            "flags": 128,
            "start": 44,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xab}@",
                "autofix": 0,
                "flags": 768,
                "start": 53,
                "end": 60
            },
            "autofix": 0,
            "flags": 128,
            "start": 53,
            "end": 62
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xbc}@",
                "autofix": 0,
                "flags": 768,
                "start": 62,
                "end": 69
            },
            "autofix": 0,
            "flags": 128,
            "start": 62,
            "end": 71
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xcd}@",
                "autofix": 0,
                "flags": 768,
                "start": 71,
                "end": 78
            },
            "autofix": 0,
            "flags": 128,
            "start": 71,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xde}@",
                "autofix": 0,
                "flags": 768,
                "start": 80,
                "end": 87
            },
            "autofix": 0,
            "flags": 128,
            "start": 80,
            "end": 89
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xef}@",
                "autofix": 0,
                "flags": 768,
                "start": 89,
                "end": 96
            },
            "autofix": 0,
            "flags": 128,
            "start": 89,
            "end": 98
        },
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "@{xf0}@",
                "autofix": 0,
                "flags": 768,
                "start": 98,
                "end": 105
            },
            "autofix": 0,
            "flags": 128,
            "start": 98,
            "end": 105
        }
    ],
    "isModule": false,
    "text": "\"\\x00\"\n;\n\"\\x12\"\n;\n\"\\x34\"\n;\n\"\\x56\"\n;\n\"\\x78\"\n;\n\"\\x9a\"\n;\n\"\\xAb\"\n;\n\"\\xBc\"\n;\n\"\\xCd\"\n;\n\"\\xDe\"\n;\n\"\\xEf\"\n;\n\"\\xF0\"",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 105
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

