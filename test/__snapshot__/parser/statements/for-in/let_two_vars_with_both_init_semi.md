# Kataw parser test case

## Input

`````js
for (let foo = bar, zoo = boo in x);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 29,
                "end": 32
            },
            "kind": 166,
            "initializer": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 8,
                            "end": 12
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 96,
                            "start": 14,
                            "end": 18
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 18
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "zoo",
                            "rawText": "zoo",
                            "flags": 96,
                            "start": 19,
                            "end": 23
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "boo",
                            "rawText": "boo",
                            "flags": 96,
                            "start": 25,
                            "end": 29
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 29
                    }
                ],
                "flags": 33554448,
                "start": 8,
                "end": 29
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 32,
                "end": 34
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 35,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "for (let foo = bar, zoo = boo in x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The lexical declaration of a 'for...in or of' statement cannot have an initializer. - start: 19, end: 29
✖ Invalid left-hand side: Must have a single binding in a 'for...of' statement. - start: 29, end: 32

```

