# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: false }
`````

## Input

`````js
let x = protecte\u0064;

let protected;

let protecte\u0064;
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
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "protected",
                            "rawText": "protecte\\u0064",
                            "flags": 96,
                            "start": 7,
                            "end": 22
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 22
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 22
            },
            "flags": 33554448,
            "start": 0,
            "end": 23
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 23,
                "end": 28
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "protected",
                            "rawText": "protected",
                            "flags": 96,
                            "start": 28,
                            "end": 38
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 28,
                        "end": 38
                    }
                ],
                "flags": 17,
                "start": 28,
                "end": 38
            },
            "flags": 33554448,
            "start": 23,
            "end": 39
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 39,
                "end": 44
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "protected",
                            "rawText": "protecte\\u0064",
                            "flags": 96,
                            "start": 44,
                            "end": 59
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 44,
                        "end": 59
                    }
                ],
                "flags": 17,
                "start": 44,
                "end": 59
            },
            "flags": 33554448,
            "start": 39,
            "end": 60
        }
    ],
    "isModule": false,
    "source": "let x = protecte\\u0064;\n\nlet protected;\n\nlet protecte\\u0064;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 60
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 44, end: 59

```

