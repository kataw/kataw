# Kataw parser test case

## Input

`````js
/*0*/ Array /*1*/[ /*2*/ "toString" /*3*/ ] /*4*/; /*5*/

/*0*/ Array
    // single line
    /*1*/[ /*2*/ "toString"
    // single line
    /*3*/ ] /*4*/
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
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "text": "Array",
                    "rawText": "Array",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 11
                },
                "expression": {
                    "kind": 201392131,
                    "text": "toString",
                    "rawText": "\"toString\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 35
                },
                "flags": 32,
                "transformFlags": 4,
                "start": 0,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "text": "Array",
                    "rawText": "Array",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 50,
                    "end": 69
                },
                "expression": {
                    "kind": 201392131,
                    "text": "toString",
                    "rawText": "\"toString\"",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 99,
                    "end": 116
                },
                "flags": 32,
                "transformFlags": 4,
                "start": 50,
                "end": 147
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 50,
            "end": 147
        }
    ],
    "isModule": false,
    "source": "/*0*/ Array /*1*/[ /*2*/ \"toString\" /*3*/ ] /*4*/; /*5*/\n\n/*0*/ Array\n    // single line\n    /*1*/[ /*2*/ \"toString\"\n    // single line\n    /*3*/ ] /*4*/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 153
}
```

### Printed

```javascript
/*0*/ /*0*/ Array /*1*/[/*2*/ "\"toString\"" /*3*/] /*4*/; /*5*/
/*0*/ Array// single line
/*1*/ [/*2*/ "\"toString\""// single line
/*3*/ ]; /*4*/

```

### Diagnostics

```javascript
✔ No errors
```

