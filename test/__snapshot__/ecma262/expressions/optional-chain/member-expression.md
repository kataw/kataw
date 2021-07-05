# Kataw parser test case

## Input

`````js
"hello"?.a;

obj.a?.b;

f2`hello world`?.a;
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
                    "start": 7,
                    "end": 9
                },
                "member": {
                    "kind": 201392131,
                    "text": "hello",
                    "rawText": "\"hello\"",
                    "flags": 96,
                    "start": 0,
                    "end": 7
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 9,
                            "end": 10
                        },
                        "flags": 536870944,
                        "start": 9,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 18,
                    "end": 20
                },
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 97,
                        "start": 11,
                        "end": 16
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 17,
                        "end": 18
                    },
                    "flags": 97,
                    "start": 11,
                    "end": 18
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
                            "start": 20,
                            "end": 21
                        },
                        "flags": 536870944,
                        "start": 20,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 21
                },
                "flags": 32,
                "start": 11,
                "end": 21
            },
            "flags": 16,
            "start": 11,
            "end": 22
        },
        {
            "kind": 120,
            "expression": {
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "start": 39,
                    "end": 41
                },
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 134299649,
                        "text": "f2",
                        "rawText": "f2",
                        "flags": 97,
                        "start": 22,
                        "end": 26
                    },
                    "template": {
                        "kind": 458761,
                        "text": "hello world",
                        "rawText": "hello world",
                        "flags": 134217824,
                        "start": 26,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 22,
                    "end": 39
                },
                "chain": {
                    "kind": 302,
                    "chain": {
                        "kind": 202,
                        "chain": null,
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 41,
                            "end": 42
                        },
                        "flags": 536870944,
                        "start": 41,
                        "end": 42
                    },
                    "flags": 32,
                    "start": 41,
                    "end": 42
                },
                "flags": 32,
                "start": 22,
                "end": 42
            },
            "flags": 16,
            "start": 22,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "\"hello\"?.a;\n\nobj.a?.b;\n\nf2`hello world`?.a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

"\"hello\""?.a;
obj.a?.b;
f2`hello world`?.a;
```

### Diagnostics

```javascript
✔ No errors
```

