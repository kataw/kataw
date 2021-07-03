# Kataw parser test case

## Input

`````js
a/*1*/?./*2*/b;


a/*1*/?./*2*/[b];

a/*1*/?./*2*/[/*3*/b/*4*/];

a?.(/*1*/x/*2*/)/*3*/


      /*4*/
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 1,
                    "end": 8
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 8,
                            "end": 14
                        },
                        "flags": 536870944,
                        "start": 8,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 19,
                    "end": 26
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 15,
                    "end": 19
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 203,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 32,
                            "end": 33
                        },
                        "flags": 536870944,
                        "start": 26,
                        "end": 33
                    },
                    "flags": 32,
                    "start": 26,
                    "end": 34
                },
                "flags": 32,
                "start": 15,
                "end": 34
            },
            "flags": 16,
            "start": 15,
            "end": 35
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 38,
                    "end": 45
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 35,
                    "end": 38
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 203,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 51,
                            "end": 57
                        },
                        "flags": 536870944,
                        "start": 45,
                        "end": 57
                    },
                    "flags": 32,
                    "start": 45,
                    "end": 63
                },
                "flags": 32,
                "start": 35,
                "end": 63
            },
            "flags": 16,
            "start": 35,
            "end": 64
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 67,
                    "end": 69
                },
                "member": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "start": 64,
                    "end": 67
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 204,
                        "chain": null,
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 70,
                                    "end": 76
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 70,
                            "end": 76
                        },
                        "flags": 268435488,
                        "start": 69,
                        "end": 82
                    },
                    "flags": 32,
                    "start": 69,
                    "end": 82
                },
                "flags": 32,
                "start": 64,
                "end": 82
            },
            "flags": 16,
            "start": 64,
            "end": 82
        }
    ],
    "isModule": false,
    "source": "a/*1*/?./*2*/b;\n\n\na/*1*/?./*2*/[b];\n\na/*1*/?./*2*/[/*3*/b/*4*/];\n\na?.(/*1*/x/*2*/)/*3*/\n\n\n      /*4*/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 101
}
```

### Printed

```javascript

a/*1*/?./*2*/b;
a/*1*/?./*2*/[b];
a/*1*/?./*2*/[/*3*/b]/*4*/;
a?.(/*1*/x/*2*/);/*3*/
 /*4*/

```

### Diagnostics

```javascript
✔ No errors
```

