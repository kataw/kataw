# Kataw parser test case

## Input

`````js
"hello"?.a;

obj.a?.b;

f2`hello world`?.a;
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "member": {
                    "kind": 201392131,
                    "text": "hello",
                    "rawText": "hello",
                    "flags": 768,
                    "start": 0,
                    "end": 7
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 9,
                    "end": 10
                },
                "flags": 256,
                "start": 0,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 768,
                    "start": 18,
                    "end": 20
                },
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 768,
                        "start": 11,
                        "end": 16
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 17,
                        "end": 18
                    },
                    "flags": 256,
                    "start": 11,
                    "end": 18
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 768,
                            "start": 20,
                            "end": 21
                        },
                        "flags": 256,
                        "start": 20,
                        "end": 21
                    },
                    "flags": 256,
                    "start": 20,
                    "end": 21
                },
                "flags": 256,
                "start": 11,
                "end": 21
            },
            "flags": 128,
            "start": 11,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 768,
                    "start": 39,
                    "end": 41
                },
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 134299649,
                        "text": "f2",
                        "rawText": "f2",
                        "flags": 768,
                        "start": 22,
                        "end": 26
                    },
                    "template": {
                        "kind": 458761,
                        "text": "hello world",
                        "rawText": "hello world",
                        "flags": 768,
                        "start": 26,
                        "end": 39
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 39
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 41,
                            "end": 42
                        },
                        "flags": 256,
                        "start": 41,
                        "end": 42
                    },
                    "flags": 256,
                    "start": 41,
                    "end": 42
                },
                "flags": 256,
                "start": 22,
                "end": 42
            },
            "flags": 128,
            "start": 22,
            "end": 43
        }
    ],
    "isModule": false,
    "text": "\"hello\"?.a;\n\nobj.a?.b;\n\nf2`hello world`?.a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

