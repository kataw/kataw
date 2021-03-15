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
    "kind": 196,
    "source": "\"\\x00\"\n;\n\"\\x12\"\n;\n\"\\x34\"\n;\n\"\\x56\"\n;\n\"\\x78\"\n;\n\"\\x9a\"\n;\n\"\\xAb\"\n;\n\"\\xBc\"\n;\n\"\\xCd\"\n;\n\"\\xDe\"\n;\n\"\\xEf\"\n;\n\"\\xF0\"",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "\u0000",
                "rawText": "\u0000",
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 8
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "\u0012",
                "rawText": "\u0012",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 8,
                "end": 15
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 8,
            "end": 17
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "4",
                "rawText": "4",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 17,
                "end": 24
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 17,
            "end": 26
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "V",
                "rawText": "V",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 26,
                "end": 33
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 26,
            "end": 35
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "x",
                "rawText": "x",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 35,
                "end": 42
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 35,
            "end": 44
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{x9a}@",
                "rawText": "@{x9a}@",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 44,
                "end": 51
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 44,
            "end": 53
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{xab}@",
                "rawText": "@{xab}@",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 53,
                "end": 60
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 53,
            "end": 62
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{xbc}@",
                "rawText": "@{xbc}@",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 62,
                "end": 69
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 62,
            "end": 71
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{xcd}@",
                "rawText": "@{xcd}@",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 71,
                "end": 78
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 71,
            "end": 80
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{xde}@",
                "rawText": "@{xde}@",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 80,
                "end": 87
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 80,
            "end": 89
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{xef}@",
                "rawText": "@{xef}@",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 89,
                "end": 96
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 89,
            "end": 98
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4261583,
                "text": "@{xf0}@",
                "rawText": "@{xf0}@",
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 98,
                "end": 105
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 98,
            "end": 105
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
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

