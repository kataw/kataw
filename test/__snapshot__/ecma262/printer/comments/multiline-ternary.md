# Kataw parser test case

## Input

`````js
const resolver = options.resolver
  /* $FlowFixMe */
  ? require(options.resolver)
  : defaultResolver;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "resolver",
                            "rawText": "resolver",
                            "flags": 96,
                            "start": 5,
                            "end": 14
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "options",
                                    "rawText": "options",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 24
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "resolver",
                                    "rawText": "resolver",
                                    "flags": 96,
                                    "start": 25,
                                    "end": 33
                                },
                                "flags": 96,
                                "start": 16,
                                "end": 33
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "start": 33,
                                "end": 56
                            },
                            "consequent": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "require",
                                    "rawText": "require",
                                    "flags": 96,
                                    "start": 56,
                                    "end": 64
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 129,
                                            "member": {
                                                "kind": 134299649,
                                                "text": "options",
                                                "rawText": "options",
                                                "flags": 96,
                                                "start": 65,
                                                "end": 72
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "resolver",
                                                "rawText": "resolver",
                                                "flags": 96,
                                                "start": 73,
                                                "end": 81
                                            },
                                            "flags": 96,
                                            "start": 65,
                                            "end": 81
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 65,
                                    "end": 81
                                },
                                "flags": 268435488,
                                "start": 56,
                                "end": 82
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "start": 82,
                                "end": 86
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "defaultResolver",
                                "rawText": "defaultResolver",
                                "flags": 96,
                                "start": 86,
                                "end": 102
                            },
                            "flags": 32,
                            "start": 16,
                            "end": 102
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 102
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 102
            },
            "flags": 33554448,
            "start": 0,
            "end": 103
        }
    ],
    "isModule": false,
    "source": "const resolver = options.resolver\n  /* $FlowFixMe */\n  ? require(options.resolver)\n  : defaultResolver;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 103
}
```

### Printed

```javascript

const resolver = options.resolver 
 /* $FlowFixMe */
? require(options.resolver) : defaultResolver;

```

### Diagnostics

```javascript
✔ No errors
```

